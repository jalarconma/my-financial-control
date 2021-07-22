import { useEffect } from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CashFlowDesktop from '../../components/desktop-components/cash-flow/CashFlowDesktop';
import CashFlowMobile from '../../components/mobile-components/cash-flow/CashFlowMobile';
import Desktop from '../../hocs/desktop/Desktop';
import Mobile from '../../hocs/mobile/Mobile';
import { createCashFlow, getCashHistoryByUser } from '../../services/cashflow-service';

import styles from './CashFlowPage.module.scss';

const CashFlowPage = () => {
  const user = useSelector(state => state.user.value);
  const [cashHistory, setCashHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const historyResponse = await getCashHistoryByUser(user.id);
        const history = historyResponse.data.listCashFlows.items;
        setCashHistory(history);
      } catch(error) {
        console.log('get cash history: ', error);
      }
    }

    getHistory();

  }, [])

  const addCashEventHandler = async (data) => {
    const cashData = {
      ...data,
      userID: user.id
    }

    try {
      const createdResponse = await createCashFlow(cashData);
      const createdCashFlow = createdResponse.data.createCashFlow;
      setCashHistory(prevHistory => {
        prevHistory.push(createdCashFlow)
        return [...prevHistory];
      });
    } catch(error) {
      console.log('create cash flow', error);
    }
  }

  return (
    <Fragment>
      <Desktop><CashFlowDesktop onAddCashEvent={addCashEventHandler} cashHistory={cashHistory}/></Desktop>
      <Mobile><CashFlowMobile onAddCashEvent={addCashEventHandler} cashHistory={cashHistory}/></Mobile>
    </Fragment>
  )
}

export default CashFlowPage;