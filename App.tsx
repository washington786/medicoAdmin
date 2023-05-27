import { StatusBar } from 'react-native';
import SafeView from './src/Globals/SafeView';
import { colors } from './src/Globals/Colors';
import Navigations from './src/navigation/Nav/Navigations';

export default function App() {
  return (
    <SafeView>
      <StatusBar
        backgroundColor={colors.primary_10}
        barStyle={"light-content"}
        animated={true}
        hidden={false}
      />
      <Navigations />
    </SafeView>
  );
}


