import { Container } from './style';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import axios from 'axios';

/**
 * Componente `CardDemand` para exibir informações de um pedido.
 *
 * @param {number} iPedido - O número do pedido.
 * @param {number} iStatus - O status do pedido (1 - Pendente, 2 - Preparando, 3 - Pronto).
 * @param {string} sTimeStamp - O carimbo de data/hora do pedido.
 * @param {string} sDetails - Detalhes do pedido.
 * @param {object} rest - Outras propriedades passadas para o componente.
 * @returns {JSX.Element} Um componente de card de pedido.
 */
export function CardDemand({
  iPedido = 0,
  iStatus = 0,
  sTimeStamp = '',
  sDetails = '',
  ...rest
}) {
  const { user } = useAuth();
  const admin = user.isAdmin;

  // Definição de valores usando padStart para formatar o número do pedido
  const formattedPedido = iPedido.toString().padStart(6, '0');

  // Mapeamento do status do pedido para um objeto
  const statusOptions = {
    1: { emoji: '🔴', name: 'Pendente' },
    2: { emoji: '🟡', name: 'Preparando' },
    3: { emoji: '🟢', name: 'Pronto' },
  };

  const [value, setValue] = useState(iStatus);

  /**
   * Atualiza o status do pedido no servidor
   * @param {number} xValue - O valor do novo status.
   */
  async function updateStatusOnServer(xValue) {
    try {
      await axios.post('/orders/update-status', {
        orderId: iPedido,
        statusId: xValue
      });
      setValue(xValue);
    } catch (error) {
      console.error('Erro ao atualizar o status do pedido:', error);
    }
  }

  /**
   * Definir o status do pedido
   * @param {Event} e - O evento de mudança de seleção.
   */
  function handleSelectValue(e) {
    const newValue = parseInt(e.target.value, 10);
    updateStatusOnServer(newValue);
  }

  return (
    <Container {...rest}>
      <header className={admin ? 'infos-demand admin' : 'infos-demand'}>
        <span>{formattedPedido}</span>
        {!admin && (
          <span>
            <span>{statusOptions[iStatus].emoji}</span> {statusOptions[iStatus].name}
          </span>
        )}
        <span>{sTimeStamp}</span>
      </header>
      <span className={admin ? 'demand-text' : ''}>{sDetails}</span>
      {admin && (
        <select
          className="status-demand"
          value={value}
          onChange={handleSelectValue}
        >
          {Object.keys(statusOptions).map((statusKey) => (
            <option key={statusKey} value={statusKey}>
              {statusOptions[statusKey].emoji} {statusOptions[statusKey].name}
            </option>
          ))}
        </select>
      )}
    </Container>
  );
}
