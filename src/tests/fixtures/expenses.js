import moment from 'moment';

export default [{
    id:'1',
    description :'rent',
    note:'This is january month rent',
    amount:54500,
    createdAt:0
},
{
    id:'2',
    description :'test2',
    note:'',
    amount:109500,
    createdAt:moment(0).subtract(4,'days').valueOf()// End Date
},
{
    id:'3',
    description :'test3',
    note:'',
    amount:10500,
    createdAt:moment(0).add(4, 'days').valueOf() //Start Date
}];