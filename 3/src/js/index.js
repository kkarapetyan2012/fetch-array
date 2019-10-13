var treeNodes = [
    { parent: null, id: 0 },
    { parent: 0, id: 1 },
    { parent: 0, id: 2 },
    { parent: 1, id: 3 },
    { parent: 1, id: 4 },
    { parent: 2, id: 5 },
    { parent: 4, id: 6 }
]

const tree = function () {
    for(var i = 0; i < treeNodes.length; i++) {
        for(var j = i + 1; j < treeNodes.length; j++) {
            var id = treeNodes[i].id;
            var parent = treeNodes[j].parent;
            if (id === parent) {
                return id;
                console.log(id);
            }
            
        }
        
    }
}

tree();