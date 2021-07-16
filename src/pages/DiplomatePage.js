import React from 'react';
import { useParams } from 'react-router-dom';

const DiplomatePage = () => {
  const { diplomadoId } = useParams();
  return (
    <div>
      Pagina del diplomado (en construcción)
      <h3>
        ID:
        {diplomadoId}
      </h3>
    </div>
  );
};

export default DiplomatePage;
