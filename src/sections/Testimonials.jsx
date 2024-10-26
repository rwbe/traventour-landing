function Testimonials() {
  return (
    <div className="container my-32" id="testimonials">
      <div className="flex flex-col items-center justify-between mb-12 text-center lg:text-left lg:flex-row">
        <div className="flex flex-col items-center gap-2 lg:items-start">
        <span className="text-lg font-semibold subtitle text-blue-700">Depoimentos</span>
          <h2 className="text-3xl font-bold text-blue-950">O que nossos clientes dizem</h2>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <div className="flex items-center mb-4">
            <img src="/testimonials/user1.png" className="w-12 h-12 rounded-full" alt="Usuário 1" />
            <div className="ml-4">
              <h5 className="text-lg font-semibold">Carlos Silva</h5>
              <p className="text-gray-500">Empresário e Viajante</p>
            </div>
          </div>
          <p className="text-gray-600">
          &quot;Fiz uma viagem inesquecível para o Rio de Janeiro com minha família. As paisagens são de tirar o fôlego, e o atendimento foi impecável! Mal posso esperar para voltar.&quot;
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <div className="flex items-center mb-4">
            <img src="/testimonials/user2.png" className="w-12 h-12 rounded-full" alt="Usuário 2" />
            <div className="ml-4">
              <h5 className="text-lg font-semibold">Maria Oliveira</h5>
              <p className="text-gray-500">Blogger de Viagem</p>
            </div>
          </div>
          <p className="text-gray-600">
           &quot;Minha aventura por Machu Picchu foi surreal! Tudo foi organizado perfeitamente, desde os guias até os detalhes da viagem. Super recomendo para quem ama explorar.&quot;
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <div className="flex items-center mb-4">
            <img src="/testimonials/user3.png" className="w-12 h-12 rounded-full" alt="Usuário 3" />
            <div className="ml-4">
              <h5 className="text-lg font-semibold">Lucas Fernandes</h5>
              <p className="text-gray-500">Aventureiro</p>
            </div>
          </div>
          <p className="text-gray-600">
           &quot;Viajar para a Patagônia foi uma experiência única! A natureza é incrível e as atividades ao ar livre são perfeitas para quem busca aventura. Valeu cada segundo!&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
