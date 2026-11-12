var comp = app.project.activeItem;
var sel = comp.selectedLayers;

app.beginUndoGroup("Gör kompar enskilda");

for (var i = 0; i < sel.length; i++) {
  var layer = sel[i];
  if (layer.source instanceof CompItem) {
    var copy = layer.source.duplicate();    
    layer.replaceSource(copy, false);     
  }
}

app.endUndoGroup();
