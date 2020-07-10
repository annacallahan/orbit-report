package org.launchcode.javawebdevtechjobsauthentication;

import org.launchcode.javawebdevtechjobsauthentication.controllers.AuthenticationController;
import org.launchcode.javawebdevtechjobsauthentication.models.User;
import org.launchcode.javawebdevtechjobsauthentication.models.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class AuthenticationFilter extends HandlerInterceptorAdapter {

    @Autowired
    UserRepository userRepository;

    @Autowired
    AuthenticationController authenticationController;

    private static final List<String> whitelist = Arrays.asList("/login", "/register", "/logout", "/css");

    private static boolean isWhiteListed(String path){
        for (String pathRoot : whitelist) {
            if (path.startsWith(pathRoot)){
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws IOException {
        HttpSession session = request.getSession(); //retrieve session from the request
        User user = authenticationController.getUserFromSession(session); // find the user from the session

        if(isWhiteListed(request.getRequestURI())) {
            return true;
        }

        //user is logged in
        if(user != null){
            return true;
        }

        //user is not logged in
        response.sendRedirect("/login");
        return false;
    }
}
