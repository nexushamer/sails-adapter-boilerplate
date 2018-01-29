const Datastore = require('@google-cloud/datastore');

// Your Google Cloud Platform project ID
const projectId = 'quiverentregasrapidas';

// Creates a client
const datastore = new Datastore({
  projectId: projectId,
});

//console.log(datastore);

//console.log(datastore);
//console.log(JSON.stringify(datastore));

/*
// The kind for the new entity
const kind = 'Task3';
// The name/ID for the new entity
const name = 'sampletask3';
// The Cloud Datastore key for the new entity
const taskKey = datastore.key([kind, name]);

console.log('taskKey' + JSON.stringify(taskKey));

// Prepares the new entity
const task = {
  key: taskKey,
  data: {
    description: 'not more tasks',
  },
};
 
// Saves the entity
datastore
  .save(task)
  .then(() => {
    console.log(`Saved ${task.key.name}: ${task.data.description}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
  */

  /*
const kind = 'Task3';
const name = 'sampletask3';
const taskKey = datastore.key([kind, name]);

var result = datastore.get(taskKey).then(results => {
	for(var i = 0;i < results.length; i++){
		const tasks = results[0];
		console.log(tasks);
	}
});
*/
/*
    const query = datastore
      .createQuery('Task3')
      .filter('description', '=', 'not more tasks');
  
	datastore.runQuery(query).then(results => {
		//results.forEach(kind => console.log(kind));
		console.log('cantidad de resultados ' + results.length);
		for(var i = 0;i < results.length; i++){
			const tasks = results[0];
			console.log(tasks);
		}
	});
*/

/*
const kind = 'Task';
const nameId = '1';
const taskKey1 = datastore.key([kind, nameId]);

const nameId2 = '2';
const taskKey2 = datastore.key([kind, nameId2]);

const nameId3 = '3';
const taskKey3 = datastore.key([kind, nameId3]);

const taskData = {
	description: 'valores de la data1',
}

const taskData2 = {
	description: 'se solicitaran los pedidos hoy',
}

const taskData3 = {
	description: 'los pedidos no fueron realizados',
}

const entities = [
	{
		key: taskKey1,
		data: taskData,
	},
	{
		key: taskKey2,
		data: taskData2,
	},
	{
		key: taskKey3,
		data: taskData3,
	}
];

datastore.upsert(entities).then(result => {
	console.log(result);
});
*/

/*
const query = datastore
.createQuery('Task')
.filter('__key__', '>=', datastore.key(['Task','1']))
.filter('__key__', '<=', datastore.key(['Task','10']));

datastore.runQuery(query).then(results => {
	//results.forEach(kind => console.log(kind));
	console.log('cantidad de resultados ' + results.length);
	for(var i = 0;i < results.length; i++){
		const tasks = results[0];
		console.log(tasks);
	}
});
*/

var date = new Date();
var components = [
    date.getYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
];

var id = components.join("");
console.log(id);