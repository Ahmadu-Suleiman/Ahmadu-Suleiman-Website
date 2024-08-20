import 'package:ahmad_suleiman/home_page.dart';
import 'package:ahmad_suleiman/others/csc_personality_page.dart';
import 'package:ahmad_suleiman/policy_page.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class Routes {
  static final GoRouter router = GoRouter(routes: <RouteBase>[
    GoRoute(
        path: '/',
        builder: (BuildContext context, GoRouterState state) {
          return const HomePage();
        },
        routes: <RouteBase>[
          GoRoute(
              path: 'fld-policy',
              builder: (BuildContext context, GoRouterState state) {
                return const PolicyPage(name: 'FLD Floating Dictionary');
              }),
          GoRoute(
              path: 'take-note-policy',
              builder: (BuildContext context, GoRouterState state) {
                return const PolicyPage(name: 'Take Note');
              }),
          GoRoute(
              path: 'hilarity-policy',
              builder: (BuildContext context, GoRouterState state) {
                return const PolicyPage(name: 'Hilarity Jokes');
              }),
          GoRoute(
              path: 'csc-personality-page',
              builder: (BuildContext context, GoRouterState state) {
                return Theme(
                    data: ThemeData(
                        fontFamily: 'Lato',
                        colorScheme:
                            ColorScheme.fromSeed(seedColor: Colors.green)),
                    child: const CscPersonalityPage());
              })
        ])
  ]);
}
