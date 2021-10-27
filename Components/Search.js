import React from 'react'
import {View, TextInput, Button, StyleSheet, FlatList, ActivityIndicator} from 'react-native'

import FilmItem from './FilmItem'
import { getBySearchedText } from '../API/TMDB'


class Search extends React.Component {

    constructor(props){
        super(props)
        this.page = 0
        this.total_pages = 0
        this.research = ""
        this.state = {
            films: [],
            isLoading: false,
        }
    }

    _loadFilms(){
        this.setState({
            isLoading: true
        })
        if (this.research.length > 0){
            getBySearchedText(this.research, this.page+1).then((data) => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({
                    films: [...this.state.films, ...data.results],
                    isLoading: false
                })
            })
        }
    }

    _inputChange(text) {
        this.research = text
    }

    _displayLoading(){
        if (this.state.isLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' color="#666"/>
                </View>
            )
        }
    }

    _searchFilms() {
        this.page = 0
        this.totalPages = 0
        this.setState({
            films: []
        }, () => {
            this._loadFilms()
        })
    }

    render(){
        return(
            <View style = {styles.main_container}>
                <TextInput
                    style = {styles.search_input}
                    placeholder = 'Titre du film'
                    onChangeText = {(text) => this._inputChange(text)}
                    onSubmitEditing = { () => this._searchFilms() }
                />
                <Button
                title = 'Rechercher'
                onPress = { ()=> this._searchFilms() }/>
                <FlatList
                    data = {this.state.films}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {({item}) => <FilmItem film={item} />}
                    onEndReachedThreshold = {0.5}
                    onEndReached = { () => {
                        if (this.page < this.totalPages){
                            this._loadFilms()
                        }
                    }

                    }
                />
                {this._displayLoading()}
            </View>
        )
    }
  
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 25,
        flex:1
    },
    search_input: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5

    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
})
export default Search