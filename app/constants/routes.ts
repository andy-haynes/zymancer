import { ImageNavRoute } from '../types/routes';
import { ScreenName } from './navigation';

export const routes: ImageNavRoute[] = [{
  image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/DuckfootbeerflightJune2016.JPG',
  label: 'Recipes',
  screen: ScreenName.Recipes,
}, {
  image: 'https://cdn.pixabay.com/photo/2016/03/21/23/36/brewery-1271858_1280.jpg',
  label: 'Brew',
  screen: ScreenName.Brew,
}, {
  image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Green_Beacon_Brewing_Company_08.jpg',
  label: 'Equipment',
  screen: ScreenName.Equipment,
}, {
  image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Saccharomyces_cerevisiae_SEM.jpg',
  label: 'Fermentation',
  screen: ScreenName.Fermentation,
}, {
  image: 'https://c.pxhere.com/photos/8c/9b/alcohol_barrel_beer_brewery_business_containers_factory_industry-1522811.jpg!d',
  label: 'Packaging',
  screen: ScreenName.NotImplemented,
}, {
  image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/WortHydrometer.JPG',
  label: 'Tools',
  screen: ScreenName.NotImplemented,
}, {
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Malt_en_grain.JPG/1600px-Malt_en_grain.JPG',
  label: 'Ingredients',
  screen: ScreenName.NotImplemented,
}];
