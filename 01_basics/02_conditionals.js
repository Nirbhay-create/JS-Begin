const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

//   Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(prop!="tracks"&& value!=null){
      records[id][prop]=value;
    }
    else if(value==null){
        delete records[id][prop]
       }
    else if(prop==="tracks" && value!=null){
        if(records[id].hasOwnProperty(prop)){
            records[id].tracks.push(value);
        }
        else{
        records[id][prop]=[];
        records[id].tracks.push(value);}
    }
    else if(prop==="tracks"&& records.hasOwnProperty("tracks")===false){
        records[id].tracks=[];
    }
   
    return records;
  }
  
  let a=updateRecords(recordCollection,2468, 'tracks', 'Free');
  console.log(a);
  