const checkbox = Array.from(document.getElementsByClassName('interest__check'));

function onCheckedParents(e) {
    let check = e.target;

    if (!checkbox.indexOf(check)) {
        return;
    } 
    while (check) {
      const parent = check.closest('ul').parentElement.querySelector('input');
      const sibling = Array.from((parent.closest('li').querySelector('ul')).querySelectorAll('input'));
      const checkStatus = sibling.map(elem => elem.checked === true);
      const every = checkStatus.every(elem => elem === true);
      const some = checkStatus.some(elem => elem === true);
      parent.checked = every;

      if (!every && every !== some) {
        parent.indeterminate = true;
      } else {
        parent.indeterminate = false;
      };

      if (check != parent) {
        check = parent;
      } else {
        check = 0;
      };
    };
    
}

function onCheckedChildren(e) {
  const children = e.target.closest('.interest').querySelectorAll('input');
  for (let index of children) {
    index.checked = this.checked;
  };
}

for (let index of checkbox) {
    index.addEventListener('change', onCheckedChildren);
    index.addEventListener('change', onCheckedParents);
};