package com.example.zadanie8;// CategoryFragment.java
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.Arrays;
import java.util.List;

public class CategoryFragment extends Fragment {

    private RecyclerView recyclerView;
    private CategoryAdapter adapter;

    public CategoryFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_category, container, false);

        recyclerView = view.findViewById(R.id.categoryRecyclerView);
        recyclerView.setLayoutManager(new LinearLayoutManager(getActivity()));

        List<String> categories = Arrays.asList(getResources().getStringArray(R.array.categories_array));

        adapter = new CategoryAdapter(categories);
        recyclerView.setAdapter(adapter);


        return view;
    }
}
