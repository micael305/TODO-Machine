import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => { //Para simular un tiempo de espera
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false); //si pasamos todo esto es que ya terminamos la carga
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 2000);
  }, []);


  const saveItem = (newItem) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };

  /*Convencion: Si tenemos más de dos elementos para retornar en un
  Custom Hook es remendable enviar un objeto en vez de un array */
}

export { useLocalStorage };