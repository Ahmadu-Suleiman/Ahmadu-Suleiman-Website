import 'package:ahmadu_suleiman/routes.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
        title: 'Ahmad Suleiman',
        theme: ThemeData(
            visualDensity: VisualDensity.adaptivePlatformDensity,
            fontFamily: 'Lato',
            colorScheme: ColorScheme.fromSeed(seedColor: Colors.brown)),
        darkTheme: ThemeData(
            visualDensity: VisualDensity.adaptivePlatformDensity,
            fontFamily: 'Lato',
            colorScheme: ColorScheme.fromSeed(
                seedColor: Colors.brown, brightness: Brightness.dark)),
        routerConfig: Routes.router);
  }
}
