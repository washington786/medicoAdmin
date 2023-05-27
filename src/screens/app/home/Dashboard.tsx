import React from 'react'
import MainView from '../../../Globals/MainView'
import TopNavigator from '../../../navigation/top/TopNavigator'

const Dashboard = () => {
  return (
    <MainView>
      <TopNavigator/>
    </MainView>
  )
}

export default React.memo(Dashboard)