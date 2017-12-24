package com.benmu.wx.module;

import android.util.Log;

import com.benmu.framework.constant.WXConstant;
import com.benmu.framework.manager.ManagerFactory;
import com.benmu.framework.manager.impl.dispatcher.DispatchEventManager;
import com.benmu.framework.model.WeexEventBean;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

import java.net.URISyntaxException;
import java.util.ArrayList;

import io.socket.client.IO;
import io.socket.client.Socket;
import io.socket.emitter.Emitter;

/**
 * Created by laohan on 17/12/23.
 */

public class SocketModule extends WXModule {
    private Socket mSocket;
    @JSMethod(uiThread = false)
    public void initialize(String url){
        try{
            mSocket = IO.socket(url);
        } catch (URISyntaxException exc){
            Log.i("Socket error", exc.toString());
        }
    }
    @JSMethod(uiThread = false)
    public void disconnect() {
        mSocket.disconnect();
    }
    @JSMethod(uiThread = false)
    public void connect() {
        mSocket.connect();
    }
    @JSMethod(uiThread = false)
    public void on(String event, final JSCallback callback) {
        mSocket.on(event, new Emitter.Listener() {
            @Override
            public void call(Object... args) {
                Log.i("Socket on", String.valueOf(args.length));
                if (args.length > 0)
                    Log.i("Socket on", String.valueOf(args[0]));
                //callback.invoke(null);
            }
        });
    }
    @JSMethod(uiThread = false)
    public void emit(String event, String data) {
        mSocket.emit(event, data);
    }
    @JSMethod(uiThread = false)
    public void close() {
        mSocket.close();
    }
}
