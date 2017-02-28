var Queue = function() {
    this.items = [];
};
Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
};
Queue.prototype.dequeue = function() {
    return this.items.shift();
};
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

var doBFS = function(graph, source) {
    var bfsInfo = [];

    for (var i = 0; i < graph.length; i++) {
	    bfsInfo[i] = {
	        distance: null,
	        predecessor: null };
    }

    bfsInfo[source].distance = 0;

    var queue = new Queue();
    queue.enqueue(source);

    while(!queue.isEmpty()){
        var u = queue.dequeue();

        for(var j = 0; j < graph[u].length; j++) {
            var neighbor = graph[u][j];
            if(bfsInfo[neighbor].distance === null){
                bfsInfo[neighbor].distance = bfsInfo[u].distance + 1;
                bfsInfo[neighbor].predecessor = u;
                queue.enqueue(neighbor);
            }
        }
    }
    return bfsInfo;
};

var adjList = [
    [1],
    [0, 4, 5],
    [3, 4, 5],
    [2, 6],
    [1, 2],
    [1, 2, 6],
    [3, 5],
    []
    ];
var bfsInfo = doBFS(adjList, 0);

for (var i = 0; i < adjList.length; i++) {
    alert("vertex " + i + ": distance = " + bfsInfo[i].distance + ", predecessor = " + bfsInfo[i].predecessor);
}
