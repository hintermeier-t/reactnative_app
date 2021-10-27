import { createStacknavigator, createAppContainer } from 'react-navigation'
import Search from '../Components/Search'

const SearchStackNavigator = createStacknavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    }
})

export default createAppContainer(SearchStackNavigator)