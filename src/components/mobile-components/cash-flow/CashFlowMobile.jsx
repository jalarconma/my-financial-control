import Button from '../../cross-components/button/Button';
import styles from './CashFlowMobile.module.scss';

const CashFlowMobile = ({onAddCashEvent}) => {
  
  return (
    <div className={styles['cash-flow']}>
      <Button type="button" disabled={true} onClick={onAddCashEvent}>Add Cash Flow</Button>
      <div className={styles['cash-flow__history']}>
        <h3>THE HISTORY TABLE HERE</h3>
      </div>
      <div className={styles['cash-flow__analysis']}>
        <h3>THE ANALYSIS HERE</h3>
      </div>
    </div>
  );
}

export default CashFlowMobile;