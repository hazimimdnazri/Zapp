## REMEMBER THIS

- This project contains **@gorhom/bottom-sheet** package, so something needs to be done first.
- You are using RN 0.60 ++ so please use the new way. Follow all the instructions for using **react-native-reanimated**. The instruction can be found [HERE](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/).
- Wrap the screen that contains bottom sheet with ```<GestureHandlerRootView></GestureHandlerRootView>``` to enable react-native-gesture-handler. **This is the new way** so no need to mess around with the **MainActivity.java** file.
- Make sure your **settings.gradle** file is clean as it can be, it is RN 0.60 ++, no linking needed.

## THE OLD WAY
In your **MainAcitivty.java** file, add the following lines, to enable RNGH globally(?)

```
package com.zapp;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Zapp";
  }

+   @Override
+   protected ReactActivityDelegate createReactActivityDelegate() {
+     return new ReactActivityDelegate(this, getMainComponentName()) {
+       @Override
+       protected ReactRootView createRootView() {
+        return new RNGestureHandlerEnabledRootView(MainActivity.this);
+       }
+     };
+   }
+ }
```
