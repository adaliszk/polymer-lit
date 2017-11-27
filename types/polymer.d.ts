declare namespace Polymer {
    type Constructor<T> = new(...args: any[]) => T;

    function dedupingMixin(mixin: Function): Function;

    interface PropertyAccessors {
        _initializeProperties();
        _initializeProtoProperties(props: any);
        _ensureAttribute(attribute: any, value: any);
        _attributeToProperty(attribute: any, value: any, type: any);
        _propertyToAttribute(property: any, attribute: any, value: any);
        _valueToNodeAttribute(node: any, value: any, attribute: any);
        _serializeValue(value: any);
        _deserializeValue(value: any, type: any);
        _createPropertyAccessor(property: any, readOnly: any);
        _setProperty(property: any, value: any);
        _setPendingProperty(property: any, value: any, shouldNotify: void);
        _isPropertyPending(prop: any);
        _invalidateProperties();
        _flushProperties();
        _propertiesChanged(currentProps: any, changedProps: any, oldProps: any);
        _shouldPropertyChange(property: any, value: any, old: any);
    }
    const PropertyAccessors: <T extends Constructor<HTMLElement>>(base: T) => T & Constructor<PropertyAccessors>;

    interface TemplateStamp {
        _stampTemplate(template: any);
        _parseTemplateAnnotations(template: any);
        _addMethodEventListenerToNode(node: any, eventName: any, methodName: any, context: any);
        _addEventListenerToNode(node: any, eventName: any, handler: any);
        _removeEventListenerFromNode(node: any, eventName: any, handler: any);
    }
    const TemplateStamp: <T extends Constructor<HTMLElement>>(base: T) => T & Constructor<TemplateStamp>;

    interface PropertyEffects extends TemplateStamp, PropertyAccessors {
        _initializeProperties();
        _initializeProtoProperties(props: any);
        _addPropertyEffect(property: any, type: any, effect: any);
        _hasPropertyEffect(property: any, type: any);
        _hasReadOnlyEffect(property: any);
        _hasNotifyEffect(property: any);
        _hasReflectEffect(property: any);
        _hasComputedEffect(property: any);
        _setPendingPropertyOrPath(path: any, value: any, shouldNotify: any, isPathNotification: any);
        _setUnmanagedPropertyToNode(node: any, prop: any, value: any);
        _setPendingProperty(property: any, value: any, shouldNotify: any);
        _setProperty(property: any, value: any);
        _invalidateProperties();
        _enqueueClient(client: any);
        _flushClients();
        setProperties(props: any);
        _flushProperties();
        ready();
        _readyClients();
        _stampTemplate(template: any);
        _propertiesChanged(currentProps: any, changedProps: any, oldProps: any);
        linkPaths(to: any, from: any);
        unlinkPaths(path: any);
        notifySplices(path: any, splices: any);
        get(path: any, root: any);
        set(path: any, value: any, root: any);
        push(path: any, ...items: any[]);
        pop(path: any);
        splice(path: any, start: any, deleteCount: any, ...items: any[]);
        shift(path: any);
        unshift(path: any, ...items: any[]);
        notifyPath(path: any, value: any);
        _createReadOnlyProperty(property: any, protectedSetter: any);
        _createPropertyObserver(property: any, methodName: any, dynamicFn: any);
        _createMethodObserver(expression: any, dynamicFns: any);
        _createNotifyingProperty(property: any);
        _createReflectedProperty(property: any);
        _createComputedProperty(property: any, expression: any, dynamicFns: any);
        _bindTemplate(template: any, dynamicFns: any);
    }
    const PropertyEffects: <T extends Constructor<HTMLElement>>(base: T) => T & Constructor<PropertyEffects>;

    interface ElementMixin extends PropertyEffects {
        _initializeProperties();
        connectedCallback();
        disconnectedCallback();
        _readyClients();
        _attachDom(dom: any);
        attributeChangedCallback(name: any, old: any, value: any);
        updateStyles(properties: any);
        resolveUrl(url: any, base: any);
    }
    const ElementMixin: <T extends Constructor<HTMLElement>>(base: T) => T & Constructor<ElementMixin>;

    interface Element extends ElementMixin { }
}