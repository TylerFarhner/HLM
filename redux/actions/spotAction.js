export const FETCH_SPOTS = 'FETCH_SPOTS'
export const CREATE_SPOTS = 'CREATE_SPOTS'

export const fetchSpots = () => {
    return async dispatch => {

        // logic to fetch spots from API
        const result = await fetch('http://10.0.0.177:3000/api/spots')

        // conv to JSON
        const resultData = await result.json()

        // console.log(resultData)

        dispatch({
            type: FETCH_SPOTS,
            payload: resultData
        })
    }
}

export const createSpot = ({
    title,
    image,
    address,
    city,
    description
}) => {
    return async dispatch => {
        const response = await fetch('https://10.0.0.177:3000/api/spots', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                image,
                city,
                address,
                description
            })
        })

        const responseData = await response.json()
        // console.log(responseData)

        dispatch({
            type: CREATE_SPOTS,
            payload: responseData
        })
    }
}