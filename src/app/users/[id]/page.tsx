function UserId({ 
    params,
  }: {
    params: {
      id: number
      username: string
      email: string
    }
  }) {
    // return <div>Usuário: {params.id} - {params.username} - { params.email}</div>
    return <h1 className="text-white text-2xl">Usuário: {params.id} - {params.username} - {params.email} </h1>
  }
  
  export default UserId;
    