import { useState } from 'react';
import Button from '../../cross-components/button/Button';
import AddCashFlowFormDesktop from '../add-cash-flow-form/AddCashFlowFormDesktop';
import Modal from '../../cross-components/overlay/modal/Modal';

import styles from './CashFlowDesktop.module.scss';

const CashFlowDesktop = ({cashHistory, onAddCashEvent}) => {
  const [showAddModal, setShowAddModal] = useState(false);

  const toggleAddModalHandler = () => {
    setShowAddModal(prevState => !prevState);
  }

  const addCashEventHandler = (data) => {
    onAddCashEvent(data);
    toggleAddModalHandler();
  }

  return (
    <div className={styles['cash-flow']}>
      { !showAddModal && <Button type="button" disabled={false} onClick={toggleAddModalHandler}>Add Cash Flow</Button> }
      {showAddModal &&
        <div className={styles['cash_flow__add-modal']}>
          <Modal>
            <AddCashFlowFormDesktop onAdd={addCashEventHandler} onClose={toggleAddModalHandler}/>
          </Modal>
        </div>
      }
      <div className={styles['cash-flow__history']}>
        <h3>THE HISTORY TABLE HERE</h3>
        <ul>
          {cashHistory.map(cashFlow => {
            return <li key={cashFlow.id}>{`${cashFlow.description} - ${cashFlow.value} - ${cashFlow.date} - ${cashFlow.type}`}</li>
          })}
        </ul>
      </div>
      <div className={styles['cash-flow__analysis']}>
        <h3>THE ANALYSIS HERE</h3>
      </div>
    </div>
  );
}

export default CashFlowDesktop;