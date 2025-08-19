import React from 'react'

const Item = () => {
  return (
    <a href="/" className='flex flex-col gap-2'>
        <img 
        className="aspect-square object-cover rounded-2xl"
        src="https://lopesrio.com.br/wp-content/uploads/2025/05/foto-13695.jpg" 
        alt="" 
        />
        <div>
            <h3 className='text-xl font-semibold'>Cabo Frio, Rio de Janeiro</h3>
            <p className='truncate text-gray-600'>Cobertura, duplex, em frente à praia das Dunas. Três suítes com ar condicionado, TV na suíte master e na sala.</p>
            <p><span className='font-semibold'>R$ 550</span> por noite</p>
        </div>
    </a>
  )
}

export default Item