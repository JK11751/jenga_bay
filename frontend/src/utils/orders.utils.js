import { toast } from "react-toastify";

export const removeOrderFromCancelled = (cancelledOrders, cancelledOrderToRemove) => {

    const existingCancelledOrder = cancelledOrders.find(
      item => item.id === cancelledOrderToRemove.id
    );
    if (existingCancelledOrder) {
        toast.info("Order removed from cancelled Items", {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: true,
        });
        return cancelledOrders.filter(item => item.id !== cancelledOrderToRemove.id);
    }
  
};
  
export const addOrderTocancelledOrders = (cancelledOrders, cancelledOrderToAdd) => {

    const existingCancelledOrder = cancelledOrders.find(item => item.id === cancelledOrderToAdd.id);
    if (existingCancelledOrder) {
        toast.error("Order is already cancelled", { position: "bottom-left" });
        return cancelledOrders.map(item =>
            item.id === cancelledOrderToAdd.id
            ? { ...cancelledOrderToAdd }
            : item
        );
    }
    toast.success("Order added to cancelled Items", { position: "bottom-left" });
    return [...cancelledOrders, { ...cancelledOrderToAdd }];
};