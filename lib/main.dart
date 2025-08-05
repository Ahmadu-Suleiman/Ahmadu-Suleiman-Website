import 'package:ahmadu_suleiman/routes.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

final primaryColor = Colors.brown;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    final textTheme = GoogleFonts.notoSansTextTheme();
    return MaterialApp.router(
        title: 'Ahmad Suleiman',
        theme: ThemeData(
            textTheme: textTheme,
            colorScheme: ColorScheme.fromSeed(seedColor: primaryColor)),
        darkTheme: ThemeData(
            textTheme: textTheme,
            colorScheme: ColorScheme.fromSeed(
                seedColor: primaryColor, brightness: Brightness.dark)),
        routerConfig: Routes.router);
  }
}
