import 'package:ahmad_suleiman/home_page.dart';
import 'package:ahmad_suleiman/others/csc_personality_page.dart';
import 'package:ahmad_suleiman/others/student.dart';
import 'package:ahmad_suleiman/policy_page.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import 'others/csc_details_upload.dart';

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
              path: 'csc-upload-details-page',
              builder: (BuildContext context, GoRouterState state) {
                return Theme(
                    data: ThemeData(
                        fontFamily: 'Lato',
                        colorScheme:
                            ColorScheme.fromSeed(seedColor: Colors.green)),
                    child: CscDetailsUpload());
              }),
          GoRoute(
              path: 'csc-personality-page',
              builder: (BuildContext context, GoRouterState state) {
                try {
                  Student student = state.extra as Student;
                  return Theme(
                      data: ThemeData(
                          fontFamily: 'Lato',
                          colorScheme:
                              ColorScheme.fromSeed(seedColor: Colors.green)),
                      child: CscPersonalityPage(student: student));
                } catch (e) {
                  return Theme(
                      data: ThemeData(
                          fontFamily: 'Lato',
                          colorScheme:
                              ColorScheme.fromSeed(seedColor: Colors.green)),
                      child: CscDetailsUpload());
                }
              })
        ])
  ]);
}
