import { stat } from "fs";

export const popup = {
    state: {
      showPopup: true,
      header: "",
      body: ""
    },
    mutations:{
        SHOW_POPUP(state, { header, body }){
            state.showPopup = true;
            state.header = header;
            state.body = body;
        },
        HIDE_POPUP(state){
            state.showPopup = false;
            state.header = "";
            state.body = "";
        }
    },
    actions:{
        showPopup(context, payload){
            context.commit("SHOW_POPUP", payload)
        },
        hidePopup(context, payload){
            context.commit("HIDE_POPUP", payload)
        }
    }
    
}