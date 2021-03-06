var Promise = function () {
  this.state = 'pending';
  this.thenables = [];
};

Promise.prototype.resolve = function (value) {
  if (this.state != 'pending')return;

  this.state = 'fulfilled';
  this.value = value;
  this._handleThen();
  return this;
};

Promise.prototype.reject = function (reason) {
  if (this.state != 'pending') return;

  this.state = 'rejected';
  this.reason = reason;
  this._handleThen();
  return this;
};

Promise.prototype.then = function (onFulfilled, onRejected) {
  var thenable = {};

  if (typeof onFulfilled == 'function') {
    thenable.fulfill = onFulfilled;
  }

  if (typeof onRejected == 'function') {
    thenable.reject = onRejected;
  }

  if (this.state != 'pending') {
    setImmediate(function () {
      this._handleThen();
    }.bind(this));
  }

  thenable.promise = new Promise();
  this.thenables.push(thenable);

  return thenable.promise;
};

Promise.prototype._handleThen = function () {
  if (this.state === 'pending')return;

  if (this.thenables.length) {
    for (var i = 0; i < this.thenables.length; i++) {
      var thenPromise = this.thenables[i].promise;
      var returnedVal;
      try {
        // 运行回调函数
      } catch (e) {
        thenPromise.reject(e);
      }
    }
    this.thenables = [];
  }
};

console.log(promise);
