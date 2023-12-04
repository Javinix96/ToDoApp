
package com.todoapp2;

import android.app.AlertDialog;
import android.app.DatePickerDialog;
import android.app.TimePickerDialog;
import android.util.Log;
import android.widget.DatePicker;
import android.widget.TimePicker;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;

public class GetBateryModule extends ReactContextBaseJavaModule {
    public GetBateryModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "GetBateryModule";
    }


    @ReactMethod
    public void DatePicker(int year,int month, int day,Callback callback) {
        DatePickerDialog.OnDateSetListener date = new DatePickerDialog.OnDateSetListener() {
            @Override
            public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                Help h = new Help(year,month,dayOfMonth);
                Gson json = new Gson();
                //Converting the Object to JSONString
                String jsonString = json.toJson(h);
                callback.invoke(jsonString);
            }
        };

        int style = AlertDialog.THEME_DEVICE_DEFAULT_DARK;
        DatePickerDialog date2 = new DatePickerDialog(getCurrentActivity(),style,date,year,month,day);
        date2.show();
    }

    @ReactMethod
    public void TimePicker(int hour, int minutes,Callback callback) {
        TimePickerDialog.OnTimeSetListener timeL = new TimePickerDialog.OnTimeSetListener() {
            @Override
            public void onTimeSet(TimePicker view, int hourOfDay, int minute) {
                Help h = new Help(hourOfDay, minute);
                Gson json = new Gson();
                //Converting the Object to JSONString
                String jsonString = json.toJson(h);
                callback.invoke(jsonString);
            }

        };

        int style = AlertDialog.THEME_DEVICE_DEFAULT_DARK;
        TimePickerDialog dialog = new TimePickerDialog(getCurrentActivity(),style,timeL,hour,minutes,true);
        dialog.show();

    }

    class Help {
        int hour;
        int minutes;
        int day;
        int year;
        int month;
        public Help(int y, int m, int d){
            day = d;
            year = y;
            month = m + 1;
        }
        public Help(int h, int mi){
            hour = h;
            minutes = mi;
        }

    }


}

