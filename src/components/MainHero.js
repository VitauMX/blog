import React from 'react'

export default function MainHero() {
  return (
    <>
      <main className='mainHero'>
        <div className='mainHero-content'>
          <h1 className='title title--big'>
            Tu salud <br /> es nuestra prioridad
          </h1>
          <h2 className='subtitle'>
            Salud, nutrición, hábitos, cuidado personal y más maneras de ser la
            mejor versión de nosotros mismos.
          </h2>
        </div>
      </main>
      <div className="squares-div">
        <div className="square blue-square" />
        <div className="square yellow-square" />
      </div>
    </>
  )
}
