import 'package:flutter/material.dart';

import 'home_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Ahmad Suleiman',
        theme: ThemeData(
            fontFamily: 'Lato',
            colorScheme: ColorScheme.fromSeed(seedColor: Colors.brown)),
        darkTheme: ThemeData(
            fontFamily: 'Lato',
            colorScheme: ColorScheme.fromSeed(
                seedColor: Colors.brown, brightness: Brightness.dark)),
        home: const MyHomePage());
  }
}
