var shoppingList = {
	items: ["apples", "oranges", "milk", "bread"],
	checked: ["milk"]
};

function addItem(shoppingList, item) {
	shoppingList.items.push(item);
};

function checkItem (shoppingList, item) {
	shoppingList.checked.push(item);
};

function deleteItem (shoppingList, item) {
	for (var i = 0; i < shoppingList.items.length; i++) {
		if (shoppingList.items[i] === item) {
			shoppingList.items.splice(i, 1);
		}
	}
};


function renderShoppingList(shoppingList, element) {
  	var shoppingList = shoppingList.items.map(function(item) {
  			var str = "";
  			if (shoppingList.checked.includes(item)) {
  				str = '<li> \
			    <span class="shopping-item shopping-item__checked">' + item + '</span> \
			    <div class="shopping-item-controls"> \
			      <button class="shopping-item-toggle"> \
			        <span class="js-check button-label">check</span> \
			      </button> \
			      <button class="shopping-item-delete"> \
			        <span class="js-delete button-label">delete</span> \
			      </button> \
			    </div> \
			 	</li> ';
  			} else {
		  		str = '<li> \
				    <span class="shopping-item">' + item + '</span> \
				    <div class="shopping-item-controls"> \
				      <button class="shopping-item-toggle"> \
				        <span class="js-check button-label">check</span> \
				      </button> \
				      <button class="shopping-item-delete"> \
				        <span class="js-delete button-label">delete</span> \
				      </button> \
				    </div> \
				 </li> ';
			}
			return str;
		});
	element.html(shoppingList);
};

$(".js-shopping-list-form").submit(function(event) {
	event.preventDefault();
	var newItem = $("#shopping-list-entry").val();
	addItem(shoppingList, newItem);
	renderShoppingList(shoppingList, $('.shopping-list'));
});

$(".js-shopping-list-form").keypress(function(event) {
	if (event.key == "return") {
		addItem(shoppingList, $("#shopping-list-entry").val());
		renderShoppingList(shoppingList, $('.shopping-list'));
	}
});

$(".js-check").click(function(event) {
	var itemToCheck = $(this).closest("div").siblings().text();
	checkItem(shoppingList, itemToCheck);
	renderShoppingList(shoppingList, $('.shopping-list'));
});

$(".js-delete").click(function(event) {
	var itemToCheck = $(this).closest("div").siblings().text();
	deleteItem(shoppingList, itemToCheck);
	renderShoppingList(shoppingList, $('.shopping-list'));
});






