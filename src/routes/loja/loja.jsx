import Propaganda from '../../components/brand';
import SideMenu from '../../components/sideMenu';
import SearchBar from '../../components/searchBar';
import ButtonFilter from '../../components/buttonFilter';
import Produto from '../../components/produto';

const Loja = () => {
  return (
    <div className='container'>
      <Propaganda />
      <section className='grid grid-cols-3 '>
        <div className='col-start-1'>
          <aside>
            <SideMenu />
          </aside>
        </div>
        <article className='col-start-2 col-span-2 grid grid-cols-3'>
          <div className=' col-span-3 m-3 items-start gap-3'>
            <SearchBar />
            <div className='grid grid-cols-3 gap-5 justify-between text-center'>
              <ButtonFilter texto='Nome da peça'></ButtonFilter>
              <ButtonFilter texto='Fabricante'></ButtonFilter>
              <ButtonFilter texto='Tipo'></ButtonFilter>
            </div>
          </div>
          <div className=''>
            <Produto />
          </div>
          <div>
            <Produto />
          </div>
          <div>
            <Produto />
          </div>
          <div>
            <Produto />
          </div>
          <div>
            <Produto />
          </div>
          <div>
            <Produto />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Loja;
