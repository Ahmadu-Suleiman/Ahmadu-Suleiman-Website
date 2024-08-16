import 'package:ahmad_suleiman_website/home_page.dart';
import 'package:ahmad_suleiman_website/privacy_policies/take_note_policy.dart';
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
              path: 'take-note-policy',
              builder: (BuildContext context, GoRouterState state) {
                return const TakeNotePolicy();
              }),
        ])
  ]);
}
