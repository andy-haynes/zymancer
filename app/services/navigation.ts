import { NavigationActions, NavigationContainerComponent } from 'react-navigation';

let navigator: NavigationContainerComponent;

function setTopLevelNavigator(navRef: NavigationContainerComponent) {
  navigator = navRef;
}

function navigate(routeName: string, params?: any) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator,
};