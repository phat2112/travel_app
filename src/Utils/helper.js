import * as config from './config'

export const handleUploadIconTemp = iconValue =>{
    const url = "http://openweathermap.org/img/w/";
    const iconType = ".png";
    return url + iconValue + iconType
}
export const locationName = [
    {key: '1687343', location: 'Sa Pa', background: 'linear-gradient(to right, #11998e, #38ef7d)'},
    {key: '1584071', location: 'Đà Lạt', background: 'linear-gradient(to right, #000046, #1cb5e0)'},
    {key: '1583992', location: 'Đà Nẵng', background: 'linear-gradient(to right, #f7971e, #ffd200)'},
    {key: '1581130', location: 'Hà Nội', background: 'linear-gradient(to right, #52c234, #061700)'},
    {key: '1580578', location: 'Sài Gòn', background: 'linear-gradient(to right, #a73737, #7a2828)'},
    {key: '1580240', location: 'Huế', background: 'linear-gradient(to right, #6441a5, #2a0845)' },
]
export const listUser = [
    {id:1, background: '#38ef7d'},
    {id:2, background: '#1cb5e0'},
    {id:3, background: '#ffd200'},
    
]
export const handleTransferName = valueName => {
    let result = locationName.find(item => item.key === valueName)
    if(result){
        return result.location
    }
}
export const handleCssBackground = valueName => {
    let result = locationName.find(item => item.key === valueName) || listUser.find(item => item.id === valueName)
    if(result){
        return result.background
    }
}
export const handleUploadImage = valueImage => {
    const urlImage = 'https://new-travel-database.herokuapp.com/' ;
    return urlImage + valueImage
}
export const transferLocation = locationName => {
    let result = config.LOCATION_CONFIG.find(item => item.key === locationName)
    if(result){
        return result.name
    }
}