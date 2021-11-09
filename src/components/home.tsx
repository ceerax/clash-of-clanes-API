import { useUser } from "../hooks/useUser"
function Home(): JSX.Element {
  const { datas, img } = useUser();

  return (
    <div>
      <div className="col-12 container">
        <div className="row">
          <table className="table table-striped table-dark">
            <thead>
              <th>Id</th>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Nivel</th>
              <th className="text-center">cantidad de miembros</th>
              <th>Medallas</th>
            </thead>
            <tbody >
            {datas.map((item: any, index: number) => {
              return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.requiredTrophies}</td>
                    <td className="text-center">{item.members}</td>
                    <td>
                      <img src={img} alt={item.name} />
                    </td>
                  </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>      
    </div>
  );
}

export default Home;
