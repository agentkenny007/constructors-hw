function Dog (facets) {
    var dog = this;
    dog.color = facets ? facets.color : undefined;
    dog.hungry = facets ? facets.hungry === false ? false : true : true;
    dog.owner = facets ? facets.owner : undefined;
    dog.status = facets ? facets.status || 'normal' : 'normal';

};

export {Dog};
