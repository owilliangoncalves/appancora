import Propaganda from '../../components/brand';
import SideMenu from '../../components/sideMenu';
import SearchBar from '../../components/searchBar';
import ButtonFilter from '../../components/buttonFilter';
import Produto from '../../components/produto';

const Loja = () => {
  return (
    <div className='container h-screen  '>
      <section className='grid grid-cols-4 h-full overflow-hidden'>
        <Propaganda />
        <div className='col-start-1'>
          <aside>
            <SideMenu />
          </aside>
        </div>
        <article className='col-start-2 col-span-3 gap-3 '>
          <div className=' col-span-3 items-start gap-3'>
            <SearchBar />
            <div className='grid grid-cols-3 gap-5 justify-between text-center'>
              <ButtonFilter texto='Nome da peça'></ButtonFilter>
              <ButtonFilter texto='Fabricante'></ButtonFilter>
              <ButtonFilter texto='Tipo'></ButtonFilter>
            </div>
          </div>
        </article>
        <div className='col-start-2 col-span-3 mt-3 overflow-y-scroll grid grid-cols-3 gap-3 pb-3'>
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
