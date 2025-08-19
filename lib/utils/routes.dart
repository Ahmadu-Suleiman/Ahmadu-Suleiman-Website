import 'package:ahmadu_suleiman/pages/csc/csc_personality_page.dart';
import 'package:ahmadu_suleiman/pages/home_page.dart';
import 'package:ahmadu_suleiman/pages/policy_page.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';

import '../models/student.dart';
import '../pages/csc/csc_details_upload_page.dart';
import '../pages/re_think_page.dart';

class Routes {
  const Routes._();

  static final _textTheme = GoogleFonts.notoSansTextTheme();
  static const home = 'home';
  static const reThinkPage = 're-think';
  static const fldPolicyPage = 'fld-policy';
  static const takeNotePolicyPage = 'take-note-policy';
  static const hilarityPolicyPage = 'hilarity-policy';
  static const cscUploadDetailsPage = 'csc-upload-details';
  static const cscPersonalityPage = 'csc-personality';

  static final GoRouter router = GoRouter(
      initialLocation: '/$home',
      onException: (_, state, router) => router.goNamed(home),
      routes: <RouteBase>[
        GoRoute(
            path: '/$home',
            name: home,
            builder: (context, state) => const HomePage(),
            routes: <RouteBase>[
              GoRoute(
                  path: fldPolicyPage, // No leading slash for child routes
                  name: fldPolicyPage,
                  builder: (context, state) =>
                  const PolicyPage(name: 'FLD Floating Dictionary')),
              GoRoute(
                  path: takeNotePolicyPage, // No leading slash for child routes
                  name: takeNotePolicyPage,
                  builder: (context, state) =>
                  const PolicyPage(name: 'Take Note')),
              GoRoute(
                  path: cscUploadDetailsPage, // No leading slash for child routes
                  name: cscUploadDetailsPage,
                  builder: (context, state) => Theme(
                      data: ThemeData(
                          textTheme: _textTheme,
                          colorScheme:
                          ColorScheme.fromSeed(seedColor: Colors.green)),
                      child: const CscDetailsUploadPage())),
              GoRoute(
                  path: cscPersonalityPage, // No leading slash for child routes
                  name: cscPersonalityPage,
                  builder: (context, state) {
                    try {
                      Student student = state.extra as Student;
                      return Theme(
                          data: ThemeData(
                              textTheme: _textTheme,
                              colorScheme: ColorScheme.fromSeed(
                                  seedColor: Colors.green)),
                          child: CscPersonalityPage(student: student));
                    } catch (e) {
                      return Theme(
                          data: ThemeData(
                              textTheme: _textTheme,
                              colorScheme: ColorScheme.fromSeed(
                                  seedColor: Colors.green)),
                          child: const CscDetailsUploadPage());
                    }
                  }),
              GoRoute(
                  path: reThinkPage, // No leading slash for child routes
                  name: reThinkPage,
                  builder: (context, state) => Theme(
                      data: ThemeData(
                          textTheme: GoogleFonts.latoTextTheme(),
                          colorScheme:
                          ColorScheme.fromSeed(seedColor: Colors.green)),
                      child: ReThinkPage()))
            ])
      ]);
}