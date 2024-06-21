import Propaganda from '../../components/brand';
import SideMenu from '../../components/sideMenu';
import SearchBar from '../../components/searchBar';
import ButtonFilter from '../../components/buttonFilter';
import Produto from '../../components/produto';
import Filter from '../../components/filter';

const Loja = () => {
  return (
    <div className='container h-screen  '>
      <section className='grid grid-cols-4 h-full overflow-hidden'>
        <Propaganda />
        <div className='grid items-end '>
          <Filter />
        </div>
        <div className='col-start-1 row-start-3'>
          <aside className='mt-3 flex'>
            <SideMenu />
          </aside>
        </div>
        <article className='col-start-2 col-span-3 gap-3 '>
          <div className=' col-span-3 items-start gap-3 mx-3'>
            <SearchBar />
            <div className='grid grid-cols-3 gap-5 justify-between text-center'>
              <ButtonFilter
                texto='Nome da peça'
                className='textActiveButton'
              ></ButtonFilter>
              <ButtonFilter
                texto='Fabricante'
                className='textInativeButton'
              ></ButtonFilter>
              <ButtonFilter
                texto='Tipo'
                className='textInativeButton'
              ></ButtonFilter>
            </div>
          </div>
        </article>
        <div className='col-start-2 col-span-3 m-3 overflow-y-scroll grid grid-cols-3 gap-3 pb-3'>
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </div>
      </section>
    </div>
  );
};

export default Loja;
