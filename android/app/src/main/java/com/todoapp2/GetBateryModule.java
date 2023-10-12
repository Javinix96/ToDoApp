
package com.todoapp2;

import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
public class GetBateryModule extends ReactContextBaseJavaModule {
    public GetBateryModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "GetBateryModule";
    }
    @ReactMethod
    public void createCalendarEvent(Callback callback) {
        Log.d("CalendarModule", "Create event called with name: "
                + " and location: " );
        callback.invoke("Data Returned");
    }
    @ReactMethod
    public String lol(String hol) {
        Log.d("funcio",hol);
        return hol;
    }




}

