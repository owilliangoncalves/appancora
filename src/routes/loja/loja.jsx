
import Propaganda from "../../components/brand";
import SideMenu from "../../components/sideMenu";
import SearchBar from "../../components/searchBar";
import ButtonFilter from "../../components/buttonFilter";
import Produto from "../../components/produto";
// import Filter from "../../components/filter";
import { useEffect, useState } from "react";
import { fetchData } from "../../service/api";
import Teclado from "../../components/teclado";
import Cart from "../../components/Cart/cart";

const Loja = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [activeInput, setActiveInput] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const mostraCarrinho = () => {
    setOpenCart(!openCart)
  }

  const tipoFiltro = 'fabricante';

  const searchByName = () => {
    const filteredProducts = products.filter((product) => {
      if (tipoFiltro === 'nomePeca') {
        return product.nomeProduto.toLowerCase().includes(search.toLowerCase());
      } else if (tipoFiltro === 'fabricante') {
        return product.marca.toLowerCase().includes(search.toLowerCase());
      }
    });

    setProducts(filteredProducts);
  };

  const placa = 'gao3f58';

  async function loadData() {
    try {
      const response = await fetchData(placa);

      setProducts(response.pageResult.data);
    } catch (error) {
      console.log('Error', error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (search === '') {
      loadData();
    }
    searchByName();
  }, [search]);

  return (
    <>
    <div className='container h-screen bg-astronaut-blue-20 relative'>
      {activeInput && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            background: '#FFFFFF',
          }}
        >
          <Teclado setSearch={setSearch} setActiveInput={setActiveInput} />
        </div>
      )}
      <section className='grid grid-cols-4 h-full overflow-hidden'>
        <Propaganda />

        <div className='col-start-1 row-start-3'>
          <aside className='mt-3 flex'>
            <SideMenu />
          </aside>
        </div>
        <article className='col-start-2 col-span-2 gap-3 my-3'>
          <div className=' col-span-3 items-start gap-3 mx-3'>
            <SearchBar
              activeInput={activeInput}
              setActiveInput={setActiveInput}
              search={search}
              setSearch={setSearch}
            />
            <div className='grid grid-cols-2 gap-5 justify-between text-center'>
              <ButtonFilter
                texto='Nome da peça'
                className='textActiveButton'
              ></ButtonFilter>
              <ButtonFilter
                texto='Fabricante'
                className='textInativeButton'
              ></ButtonFilter>
            </div>
          </div>
        </article>
        <div className='col-start-2 col-span-3 m-3 overflow-y-scroll grid grid-cols-3 gap-3 pb-3'>
          {products.length &&
            products.map((product) => (
              <Produto key={product.id} {...product} />
            ))}
        </div>
        <Cart event={mostraCarrinho} isTrue={openCart}/>
      </section>
      </div>
      </>
  );
};

export default Loja;
