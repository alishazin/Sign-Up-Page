
function onLoad() {
    let fields = Array.prototype.slice.call(document.querySelectorAll('.input-container input'));
    for (let x of fields) {
        if (x.value !== '') {
            let overlay = (x.parentNode).children[1];
            overlay.style.transform = `translate(calc(100% - 50px), 0)`;
            overlay.style.color = 'black';
        }
    }
}

function hoverHeader(self) {
    self.style.animationName = 'text-animation';
    self.style.animationDuration = '0.5s';
    self.style.animationDirection = 'normal';
    self.style.animationFillMode = 'forwards';
}

function unhoverHeader(self) {
    self.style.animationName = 'text-animation-reverse';
    self.style.animationDuration = '0.5s';
    self.style.animationFillMode = 'forwards';
}

function controlOverlay(self, state, placeHolder) {
    let parent = self.parentNode;
    let overlay = parent.children[1];
    if (state === 'focus') {
        self.placeholder = placeHolder;
        overlay.style.transform = 'translate(calc(100% - 50px), 0)';
        overlay.style.color = 'black';
    } else {
        if (self.value === '') {
            self.placeholder = '';
            overlay.style.transform = `translate(0, 0)`;
            overlay.style.color = '#949494';
        }
    }
}

function transferFocus(self) {
    let parent = self.parentNode;
    parent.children[0].focus();
}