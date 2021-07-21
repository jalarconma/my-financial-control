import { Fragment } from 'react';
import CashFlowDesktop from '../../components/desktop-components/cash-flow/CashFlowDesktop';
import CashFlowMobile from '../../components/mobile-components/cash-flow/CashFlowMobile';
import Desktop from '../../hocs/desktop/Desktop';
import Mobile from '../../hocs/mobile/Mobile';

import styles from './CashFlowPage.module.scss';

const CashFlowPage = () => {
  const addCashEventHandler = (data) => {
    console.log(data);
  }

  return (
    <Fragment>
      <Desktop><CashFlowDesktop onAddCashEvent={addCashEventHandler}/></Desktop>
      <Mobile><CashFlowMobile onAddCashEvent={addCashEventHandler}/></Mobile>
    </Fragment>
  )
}

export default CashFlowPage;