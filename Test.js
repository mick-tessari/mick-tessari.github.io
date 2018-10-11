
/*var parent1=null;
getTableau = function(){
	parent1 = parent.parent.tableau;
	return parent1
};

getTableau();*/

var viz, sheet, table;

function initViz() {
		var containerDiv = document.getElementById("tableauviz"),
                    url = "https://public.tableau.com/views/RegionalSampleWorkbook/Storms",
                    options = {
                        hideTabs: true,
                        hideToolbar: true,
                    };
                viz = new tableau.Viz(containerDiv, url, options);
            }