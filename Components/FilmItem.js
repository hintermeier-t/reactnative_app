import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'

import {getImage} from '../API/TMDB'

class FilmItem extends React.Component{
    render(){
        const film = this.props.film
        return(
            <View style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{uri: getImage(film.poster_path)}}
                />
                <View style={styles.content_container}>
                    <View style={styles.headers_container}>
                        <Text style={styles.title}>{film.title}</Text>
                        <Text style={styles.vote}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row',
    },
    image: {
        height: 180,
        width: 120,
        margin: 5,
        backgroundColor: "grey"
    },
    content_container: {
        flex: 2,
        flexDirection: 'column'
    },
    headers_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title:{
        flex: 4,
        flexWrap: 'wrap',
        color: '#000000',
        fontSize: 20,
        paddingRight: 5,
    },
    vote:{
        flex: 1,
        color: '#606060',
        fontSize: 20,
    },
    description_container:{
        flex: 7,
    },
    description_text:{
        textAlign: 'justify',
        fontSize: 12,
        fontStyle: 'italic'
    },
    date_container:{
        flex: 1,
    },
    date_text:{
        textAlign: 'right',
        fontSize: 10,
        marginRight:5,
    },

})
export default FilmItem