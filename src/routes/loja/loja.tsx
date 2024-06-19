import React from 'react';
import Propaganda from '../../components/brand';
import SideMenu from '../../components/sideMenu';
import SearchBar from '../../components/searchBar';
import Button from '../../components/button';
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
            <Button texto='Nome da peça'></Button>
            <Button texto='Fabricante'></Button>
            <Button texto='Tipo'></Button>
          </div>
          <div className='gap-3'>
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
